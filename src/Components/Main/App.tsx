import React from 'react';
import './App.scss';
import axios from 'axios';
import {Link} from "react-router-dom";

type Rform = {
    id: string;
    pwd: string;
    r_pwd: string
    email: string;
};

class App extends React.Component<any, any>{
    state={
        id: '',
        pwd: '',
        r_pwd: '',
        email: '',

        id_text: '',
        email_text: '',
        pwd_text: '',
        r_pwd_text: '',

        id_border: 'white',
        email_border: 'white',
        pwd_border: 'white',
        r_pwd_border: 'white'
    }
    render(){
        const id_regex = /^[A-Za-z0-9]{5,12}$/;
        const pwd_regex = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        const email_regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;


        const onChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
            this.setState({
                [e.target.name]: e.target.value,
            })
        };

        const onFocus1 = (e: React.FocusEvent<HTMLInputElement>) => {
            if (!id_regex.test(this.state.id)) {
                this.setState({
                    id_border: 'red',
                    id_text: '영어와 숫자로 5~12자 만들어주세요.'
                })
            }
            if (id_regex.test(this.state.id)) {
                this.setState({
                    id_border: 'white',
                    id_text: ''
                })
            }

            if (!pwd_regex.test(this.state.pwd)) {
                this.setState({
                    pwd_border: 'red',
                    pwd_text: '영어와 숫자, 특수문자로 8~16자를 만들어주세요.'
                })
            }
            if (pwd_regex.test(this.state.pwd)) {
                this.setState({
                    pwd_border: 'white',
                    pwd_text: ''
                })
            }

            if (!email_regex.test(this.state.email)) {
                this.setState({
                    email_border: 'red',
                    email_text: '이메일 형식에 맞지않습니다.'
                })
            }
            if (email_regex.test(this.state.email)) {
                this.setState({
                    email_border: 'white',
                    email_text: ''
                })
            }

            if (this.state.pwd !== this.state.r_pwd) {
                this.setState({
                    r_pwd_border: 'red',
                    r_pwd_text: '비밀번호가 일치하지 않습니다.'
                })
            }
            if(this.state.pwd === this.state.r_pwd){
                this.setState({
                    r_pwd_border: 'white',
                    r_pwd_text: ''
                })
            }
        };

        const onBlur1 = (e: React.FocusEvent<HTMLInputElement>) => {
            if (!id_regex.test(this.state.id)) {
                this.setState({
                    id_border: 'red',
                    id_text: '영어와 숫자로 5~12자 만들어주세요.'
                })
            }
            if (id_regex.test(this.state.id)) {
                this.setState({
                    id_border: 'white',
                    id_text: ''
                })
            }

            if (!pwd_regex.test(this.state.pwd)) {
                this.setState({
                    pwd_border: 'red',
                    pwd_text: '영어와 숫자, 특수문자로 8~16자를 만들어주세요.'
                })
            }
            if (pwd_regex.test(this.state.pwd)) {
                this.setState({
                    pwd_border: 'white',
                    pwd_text: ''
                })
            }

            if (!email_regex.test(this.state.email)) {
                this.setState({
                    email_border: 'red',
                    email_text: '이메일 형식에 맞지않습니다.'
                })
            }
            if (email_regex.test(this.state.email)) {
                this.setState({
                    email_border: 'white',
                    email_text: ''
                })
            }

            if (this.state.pwd !== this.state.r_pwd) {
                this.setState({
                    r_pwd_border: 'red',
                    r_pwd_text: '비밀번호가 일치하지 않습니다.'
                })
            }
            if(this.state.pwd === this.state.r_pwd){
                this.setState({
                    r_pwd_border: 'white',
                    r_pwd_text: ''
                })
            }
        };

        const send = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
            e.preventDefault();
            let data:any = {
                id:  this.state.id,
                email: this.state.email,
                pwd: this.state.pwd
            }
            axios.post('http://localhost:3001/register', data )
                .then(res=>{
                    console.log(res.data)
                })
        }



        return(
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
                                <input type={'text'} className={'register_input'} style={{borderColor: this.state.id_border}} name={'id'} id={'id'} placeholder={'아이디'} onChange={onChange1} onFocus={onFocus1} onBlur={onBlur1}/>
                                <span style={{fontSize: 10, color: 'red'}}>{this.state.id_text}</span>
                                <input type={'text'} className={'register_input'} style={{ borderColor: this.state.email_border }} name={'email'} id={'email'} placeholder={'이메일'} onChange={onChange1} onFocus={onFocus1} onBlur={onBlur1}/>
                                <span style={{fontSize: 10, color: 'red'}}>{this.state.email_text}</span>
                                <input type={'password'} className={'register_input'} style={{ borderColor: this.state.pwd_border }} name={'pwd'} id={'pwd'} placeholder={'비밀번호'} onChange={onChange1} onFocus={onFocus1} onBlur={onBlur1}/>
                                <span style={{fontSize: 10, color: 'red'}}>{this.state.pwd_text}</span>
                                <input type={'password'} className={'register_input'} style={{ borderColor: this.state.r_pwd_border }} name={'r_pwd'} id={'r_pwd'} placeholder={'비밀번호 확인'} onChange={onChange1} onFocus={onFocus1} onBlur={onBlur1}/>
                                <span style={{fontSize: 10, color: 'red'}}>{this.state.r_pwd_text}</span>
                                <input type={'submit'} className={'register_button'}  id={'register'} value={'가입'} onClick={send} />
                            </form>

                            <hr style={{width: '99.5%', marginTop: 20}}/>


                            <button className={'login_button'}><Link to={'/login'}>로그인</Link></button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

//이메일 함

//회사에서 아무것도 안시키고 부산이나 데려가는데 리액트 공부는 해야겠어서 만드는 에스크

export default App;
