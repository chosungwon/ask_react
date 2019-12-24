import React, { useState } from 'react';
import './App.scss';
import axios from 'axios';
import {Link} from "react-router-dom";

type Rform = {
    id: string;
    pwd: string;
    r_pwd: string
    email: string;
};

const App = ({id, pwd, r_pwd, email}: Rform) => {
    const [form, setForm] = useState({
        id: '',
        pwd: '',
        r_pwd: '',
        email: '',

        a: 0,

        id_border: 'white',
        email_border: 'white',
        pwd_border: 'white',
        r_pwd_border: 'white'
    });

    const id_regex = new RegExp('/^[A-Za-z0-9]{5,12}$/');
    const pwd_regex = new RegExp('/^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/');
    const email_regex = new RegExp('/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i');



    const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })


        if (form.r_pwd !== form.pwd){

            setForm({
                ...form,
                r_pwd_border: 'red',
            })
        }
        else if (form.r_pwd === form.pwd){
            setForm({
                ...form,
                r_pwd_border: 'blue'
            })
        }
    };

    const onFocus1 = (e: React.FocusEvent<HTMLInputElement>) => {


        if (form.r_pwd !== form.pwd) {

            setForm({
                ...form,
                r_pwd_border: 'red',
            })
        }
        else if (form.r_pwd === form.pwd) {
            setForm({
                ...form,
                r_pwd_border: 'blue'
            })
        }
    };

    const send = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        let data:any = {
            id: form.id,
            email: form.email,
            pwd: form.pwd
        }
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
                        <h1 className={'form_logo'}>가입하기</h1>
                        <form>
                            <input type={'text'} className={'register_input'} style={{borderColor: form.id_border}} name={'id'} id={'id'} placeholder={'아이디'} onChange={onChange1} onFocus={onFocus1}/>
                            <input type={'text'} className={'register_input'} style={{ borderColor: form.email_border }} name={'email'} id={'email'} placeholder={'이메일'} onChange={onChange1} onFocus={onFocus1}/>
                            <input type={'text'} className={'register_input'} style={{ borderColor: form.pwd_border }} name={'pwd'} id={'pwd'} placeholder={'비밀번호'} onChange={onChange1} onFocus={onFocus1}/>
                            <input type={'text'} className={'register_input'} style={{ borderColor: form.r_pwd_border }} name={'r_pwd'} id={'r_pwd'} placeholder={'비밀번호 확인'} onChange={onChange1} onFocus={onFocus1}/>
                            <input type={'submit'} className={'register_button'}  id={'register'} value={'가입'} onClick={send} />
                        </form>

                        <hr style={{width: '99.5%', marginTop: 20}}/>


                        <button className={'login_button'}><Link to={'/login'}>로그인</Link></button>
                    </div>
                </div>
            </div>
        </>
    );
}

//이메일 함

//회사에서 아무것도 안시키고 부산이나 데려가는데 리액트 공부는 해야겠어서 만드는 에스크

export default App;
