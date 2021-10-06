import React from "react";
import { FormContainer, WarningContainer, Wrapper } from "./styles";
import Header from "../../molecules/Header";
import FooterButton from "../../atoms/FooterButton";
import {ImCheckboxUnchecked,ImCheckboxChecked} from 'react-icons/im';

function DeactivateTemplate({
  nickname,
  handleUserDeactivate,
  isClicked,
  handleClick,
}) {
  return (
    <>
      <Header title="회원탈퇴" isBack />
      <Wrapper>
        <FormContainer>
          <div className="input-box">
              <p className="nick-name">{nickname.value}님,</p>
              그동안 이게뭐약 서비스를 이용해 주셔서 감사합니다.
          </div>
        </FormContainer>
        <WarningContainer>
          <li className="content">
            - 탈퇴 시, 이게뭐약에서 저장한 내역은 모두 삭제되며, 탈퇴 이후 복구가 불가능합니다.
          </li>
          <li className="content">
            - 작성된 리뷰는 자동 삭제되지 않습니다. 이를 원치 않을 경우 작성한 리뷰를 모두 삭제하신 후 탈퇴해주세요.
          </li>
        </WarningContainer>
        <div className="check-box" onClick={handleClick}>
          { isClicked ?
            (<ImCheckboxChecked className="icon"/>) :
            (<ImCheckboxUnchecked className="icon"/>)
          }
          <h4 className="title">위 사실을 확인하였습니다.</h4>
        </div>
      </Wrapper>

      <FooterButton children="회원탈퇴" onClick={() => handleUserDeactivate()} />
    </>
  );
}

export default DeactivateTemplate;
