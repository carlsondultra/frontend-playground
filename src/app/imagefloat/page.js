import {
    Floating1,
    Floating2,
    Floating3,
    Floating4,
    Floating5,
    Floating6,
    Floating7,
    Floating8
} from "../imagefloat/data"
import './styles.css'
import styles from "./page.module.scss"
import Image from "next/image"



export default function Home() {
    return(
        <main className={styles.main}>
            <div className={styles.plane}>
                <Image
                    alt="image"
                    src={Floating1}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating2}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating3}
                    width={300}
                />
            </div>
            <div className={styles.plane}>
                <Image
                    alt="image"
                    src={Floating4}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating5}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating6}
                    width={300}
                />
            </div>
            <div className={styles.plane}>
                <Image
                    alt="image"
                    src={Floating7}
                    width={300}
                />
                <Image
                    alt="image"
                    src={Floating8}
                    width={300}
                />
            </div>
        </main>
    )
}
