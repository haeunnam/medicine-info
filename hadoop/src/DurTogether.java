package wtm;

import java.io.IOException;
import java.util.StringTokenizer;
import java.util.*;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.util.GenericOptionsParser;
import org.bson.BasicBSONObject;

import com.mongodb.BasicDBObject;
import com.mongodb.hadoop.MongoInputFormat;
import com.mongodb.hadoop.MongoOutputFormat;
import com.mongodb.hadoop.io.BSONWritable;
import com.mongodb.hadoop.util.MongoConfigUtil;
import com.mongodb.DBCollection;

public class DurTogether {
	/*
	 * Object, Text : input key-value pair type (always same (to get a line of input
	 * file)) Text, IntWritable : output key-value pair type
	 */
	public static class TokenizerMapper extends Mapper<Object, Text, Text, Text> {

		// variable declairations
		private final static IntWritable one = new IntWritable(1);
		private Text ingredientList = new Text();
		private Text caution = new Text();

		// map function (Context -> fixed parameter)
		public void map(Object key, Text value, Context context) throws IOException, InterruptedException {

			String[] arr = value.toString().split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);

			String drug1 = arr[32];
			String drug2 = arr[41];
			String keypair = "";
			if (Integer.parseInt(drug1) < Integer.parseInt(drug2)) {
				keypair = drug1 + "," + drug2;
			} else {
				keypair = drug2 + "," + drug1;
			}

			ingredientList.set(keypair);
			caution.set(arr[20]);
			context.write(ingredientList, caution);

		}
	}

	/*
	 * Text, IntWritable : input key type and the value type of input value list
	 * Text, IntWritable : output key-value pair type
	 */
	public static class TogetherReducer extends Reducer<Text, Text, Text, BSONWritable> {

		// variables
		private Text result = new Text();

		// key : a disticnt word
		// values : Iterable type (data list)
		public void reduce(Text key, Iterable<Text> values, Context context) throws IOException, InterruptedException {

			BasicBSONObject output = new BasicBSONObject();
			BSONWritable reduceResult = new BSONWritable();

			String s = "";

			for (Text val : values) {
				s += val.toString();
			}

			/*
			 * result.set(s); 
			 * context.write(key,result);
			 */

			output.put("value", s.toString());
			reduceResult.setDoc(output);
			context.write(key, reduceResult);
		}
	}

	/* Main function */
	public static void main(String[] args) throws Exception {
		Configuration conf = new Configuration();
		String[] otherArgs = new GenericOptionsParser(conf, args).getRemainingArgs();
		if (otherArgs.length != 2) {
			System.err.println("Usage: DUR - togethers <in> <out>");
			System.exit(2);
		}

		/*
		 * FileSystem hdfs=FileSystem.get(conf); 
		 * Path output=new Path(otherArgs[1]);
		 * if(hdfs.exists(output)) hdfs.delete(output, true);
		 */

		MongoConfigUtil.setOutputURI(conf, "mongodb://j5b205.p.ssafy.io:7777/" + otherArgs[1]);
		DBCollection collection = MongoConfigUtil.getOutputCollection(conf);
		collection.drop();

		Job job = new Job(conf, "DUR medicine Caution");
		job.setJarByClass(DurTogether.class);

		// let hadoop know my map and reduce classes
		job.setMapperClass(TokenizerMapper.class);
		job.setReducerClass(TogetherReducer.class);

		job.setOutputKeyClass(Text.class);
		job.setOutputValueClass(Text.class);

		// set number of reduces
		job.setNumReduceTasks(50);

		// set input and output directories
		FileInputFormat.addInputPath(job, new Path(otherArgs[0]));
		// FileOutputFormat.setOutputPath(job,new Path(otherArgs[1]));
		job.setOutputFormatClass(MongoOutputFormat.class);

		System.exit(job.waitForCompletion(true) ? 0 : 1);
	}
}
