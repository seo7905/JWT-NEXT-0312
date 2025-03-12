"use client";
import { use, useEffect, useState } from "react";
import styles from "../../page.module.css";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Page(){
    const {idx} = useParams();
    const API_URL = `/api/v1/bbs/${idx}`; //호출한 서버의 경로
    const [bbs, setBbs] = useState({});

    //비동기식 통신을 하는 함수
    function getBbs(){
        axios.get(API_URL).then((res) => {
            setBbs(res.data.data);
        });
    };

    //현재페이지가 로드될 때 한번 수행하는 기능
    useEffect(() => {
        getBbs();
    },[idx]);
    return(
        <main className={styles.main} >
            <h1>상세보기</h1>
            <hr/>
            <table className="t1">
                <tbody>
                    <tr>
                        <th>번호</th>
                        <td colSpan={3}>{idx}</td>
                    </tr>
                    <tr>
                        <th>제목</th>
                        <td colSpan={3}>{bbs.title}</td>
                    </tr>
                    <tr>
                        <th>글쓴이</th>
                        <td>{bbs.writer}</td>
                        <th>조회수</th>
                        <td>{bbs.hit}</td>
                    </tr>
                    <tr>
                        <th>등록일</th>
                        <td colSpan={3}>{bbs.write_date}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td colSpan={3}>{bbs.content}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            [<Link href='/bbs'> 뒤로 </Link>]
                        </td>
                    </tr>
                </tfoot>
            </table>
        </main>
    );
}