/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import PulseLoader from 'react-spinners/PulseLoader';
import Styles from './styles';
import Logo from '../../components/Logo';
import { getConfirmationCode, submitConfirmationCode } from './redux';

interface Props {
  getConfirmationCodeLoading: boolean,
  getConfirmationCodeSuccess: object | null,
  getConfirmationCode: (data: {phone_number: string}) => void,
  submitConfirmationCodeLoading: boolean,
  submitConfirmationCodeSuccess: object | null,
  submitConfirmationCode: (data: {phone_number: string, verification_code: string}) => void,
}

function Login(
  {
    getConfirmationCodeLoading,
    getConfirmationCodeSuccess,
    submitConfirmationCodeLoading,
    submitConfirmationCodeSuccess,
    getConfirmationCode: getConfirmationCodeAction,
    submitConfirmationCode: submitConfirmationCodeAction,

  }: Props,
) {
  const history = useHistory();
  const [code, setCode] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [mode, setMode] = useState<string>('Phone');

  useEffect(() => {
    let token: string | null = localStorage.getItem('CH-token');
    let uid: string | null = localStorage.getItem('CH-uid');
    if (token && uid) {
      history.push('/list');
    }
  }, []);

  useEffect(() => {
    if (getConfirmationCodeSuccess && mode !== 'Code') {
      setMode('Code');
    }
  }, [getConfirmationCodeSuccess]);

  useEffect(() => {
    if (submitConfirmationCodeSuccess) {
      localStorage.setItem('CH-token', _.get(submitConfirmationCodeSuccess, 'auth_token'));
      localStorage.setItem('CH-uid', (_.get(submitConfirmationCodeSuccess, ['user_profile', 'user_id'])).toString(10));
      history.push('/list');
    }
  }, [submitConfirmationCodeSuccess]);

  return (
    <Styles>
      <Logo />
      <h3 id="page-title">{mode === 'Phone' ? 'Enter your phone #' : 'Enter confirmation code'}</h3>
      <input
        value={mode === 'Phone' ? phone : code}
        onChange={(e) => mode === 'Phone' ? setPhone(e.target.value) : setCode(e.target.value)}
        type="text"
        placeholder={mode === 'Phone' ? 'eg: +989121111111' : 'eg: 1234'}
        id="phone-input"
      />
      <button
        disabled={(mode === 'Phone' ? !phone : !code) || getConfirmationCodeLoading || submitConfirmationCodeLoading}
        id="next-button"
        type="button"
        onClick={() => mode === 'Phone'
          ? getConfirmationCodeAction({ phone_number: phone.replace(/\s/g, '') })
          : submitConfirmationCodeAction({
            phone_number: phone.replace(/\s/g, ''),
            verification_code: code.replace(/\s/g, '')
          })}
      >
        {
          (getConfirmationCodeLoading || submitConfirmationCodeLoading)
            ? (
              <PulseLoader color="#fff" size={18} />
            ) : (
              <>
                Next
                <BsArrowRight />
              </>
            )
        }
      </button>
    </Styles>
  );
}

export default connect(
  state => ({
    getConfirmationCodeLoading: _.get(state, ['Login', 'getConfirmationCodeLoading']),
    getConfirmationCodeSuccess: _.get(state, ['Login', 'getConfirmationCodeSuccess']),

    submitConfirmationCodeLoading: _.get(state, ['Login', 'submitConfirmationCodeLoading']),
    submitConfirmationCodeSuccess: _.get(state, ['Login', 'submitConfirmationCodeSuccess']),
  }),
  {
    getConfirmationCode,
    submitConfirmationCode,
  },
)(Login);
