#!/bin/bash

echo -e "\n\n\n" | ssh-keygen -t rsa -P ""
cat $HOME/.ssh/id_rsa.pub >> $HOME/.ssh/authorized_keys


