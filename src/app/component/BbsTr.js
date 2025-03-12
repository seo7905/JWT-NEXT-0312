import Link from "next/link";

export default function BbsTr(props){
    return(
        <tr>
            <td>{props.b_idx}</td>
            <td>
                <Link href={`bbs/${props.b_idx}`}>
                    {props.title}
                </Link>
            </td>
            <td>{props.writer}</td>
            <td>{props.write_date}</td>
            <td>{props.hit}</td>
        </tr>
    );
}