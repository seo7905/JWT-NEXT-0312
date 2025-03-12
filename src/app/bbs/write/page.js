"use client";
import Link from "next/link";
import styles from "../../page.module.css";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page(){
    const API_URL = "/api/v1/bbs";
    const [bbs, setBbs] = useState({});

    const router = useRouter();
    function sendBbs(){
        axios.post(API_URL, JSON.stringify(bbs),{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res) => {
            //console.log(res);
            //목록창으로 이동
            if(res.status == 200)
                router.push("/bbs");
        });
    }

    function handleChange(e){
        const {name,value} = e.target;
        setBbs({...bbs, [name]:value});
    //    console.log({...bbs, [name]:value});//전달값 확인
    }
    return(
        <main className={styles.main} >
            <h1>상세보기</h1>
            <hr/>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>
                            <input type="text" id="title" name="title" 
                                onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td colSpan={3}>
                            <input type="text" id="writer" name="writer" 
                                onChange={handleChange}/></td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>
                            <textarea cols={40} rows={5} name="content"
                                onChange={handleChange}></textarea>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <Link href='/bbs'>
                                <button type="button">뒤로</button>
                            </Link>
                        </td>
                        <td>
                            <button type="button" onClick={sendBbs}>저장</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}