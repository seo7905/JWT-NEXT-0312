"use client";
import { useState } from "react";
import styles from "../../page.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const API_URL = "/api/v1/members/login";
  const [member, setMember] = useState({});
  const router = useRouter();

  function signIn() {
    axios.post(API_URL, JSON.stringify(member), {
      withCredentials: true,
      headers:{
        "Content-Type":"application/json",
      },
    }).then((res) => {
      if(res.status == 200) router.push("/");
      console.log("응답 데이터:", res.data);
    });
  }

  function handleChange(e) {
    // let name = e.target.name;
    // let value = e.target.value;
    let {name,value} = e.target;
    console.log(name+":"+value);
    setMember({...member, [name]:value})
    
    // signIn(); // 서버로 아이디와 비밀번호를 보낸다.
  }

  return (
    <main className={styles.main}>
      <h1>로그인</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="username">사용자 이름</label>
              </td>
              <td>
                <input
                  type="text"
                  id="username"
                  name="mid"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="password">비밀번호</label>
              </td>
              <td>
                <input
                  type="password"
                  id="password"
                  name="mpwd"
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={2} className={styles.txtCenter}>
                <button type="button" onClick={signIn}>
                  로그인
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </main>
  );
}
