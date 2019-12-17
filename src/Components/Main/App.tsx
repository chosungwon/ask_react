import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';

interface Rform {
    id: string;
    pwd: string;
    r_pwd: string
    email: string;
};

const App: React.FC = () => {

    const [form, setForm] = useState({
        id: '',
        pwd: '',
        r_pwd: '',
        email: ''
    });

    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };


    const send = (e: any) => {
        e.preventDefault();
        let data:any = form;
        delete data.r_pwd;
        axios.post('http://localhost:3001/register', data )
            .then(res=>{
                console.log(res.data)
            })
    }
  return (
    <>
      <div className={'nav_bar'}>
          <div className={'logo'}>ASK</div>
        </div>
        <div className={'container'}>
            <div className={'row1'}>
                <h1 className={'row1_logo'}>에스크</h1>
                <p className={'row1_logo_down'}>평범한 에스크</p>
                <p className={'row1_explain'}>무엇인가 비어있다.</p>
            </div>
            <div className={'row2'}>
                <div className={'register_form'}>
                    <h1 className={'form_logo'}>가입</h1>
                    <form>
                        <input type={'text'} className={'register_input'} name={'id'} id={'id'} placeholder={'아이디'} onChange={onChange1}/>
                        <input type={'text'} className={'register_input'} name={'email'} id={'email'} placeholder={'이메일'} onChange={onChange1}/>
                        <input type={'text'} className={'register_input'} name={'pwd'} id={'pwd'} placeholder={'비밀번호'} onChange={onChange1}/>
                        <input type={'text'} className={'register_input'} name={'r_pwd'} id={'r_pwd'} placeholder={'비밀번호 확인'} onChange={onChange1}/>
                        <input type={'submit'} className={'register_button'} id={'register'} value={'가입'} onClick={send} />
                    </form>

                    <hr style={{width: '99.5%', marginTop: 20}}/>

                    <button className={'login_button'}>로그인</button>
                </div>
            </div>
        </div>
    </>
  );
}

//아이디 5~12자의 영문, 숫자만 사용 가능합니다.
//비밀번호 8~16자의 영문, 숫자 특수문자만
//이메일 포함

//회사에서 아무것도 안시키고 부산이나 데려가는데 리액트 공부는 해야겠어서 만드는 에스크

export default App;
