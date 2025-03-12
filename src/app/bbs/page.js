"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import BbsTr from "../component/BbsTr";
import Link from "next/link";
import styles from '../page.module.css';

function Page(){
    const API_URL = "/api/v1/bbs";
    const [list, setList] = useState([]);

    // 비동기식 통신을 수행하는 함수
    function getBbsList(){
        axios.get(API_URL).then((res) => {
          setList(res.data.data);  
        })
    };

    // 한번만 호출하는 함수
    useEffect(() => {
        getBbsList();
    },[]);

    return(
        <div>
            <h2>게시판</h2>
            <hr/>
            <table className="t1">
                <thead>
                    <tr>
                        <td colSpan={5} className={styles.no_border}>
                            <Link href='bbs/write'>
                                <button type="button">글쓰기</button>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <th>기본키</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                {list.map( (row,i) => (
                    <BbsTr key={i} b_idx={row.b_idx} title={row.title} 
                        writer={row.writer} write_date={row.write_date} 
                        hit={row.hit}/>
                ))}    
                </tbody>
            </table>
        </div>
    );
}
export default Page;