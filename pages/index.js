// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>互联网优质博主导航</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}>
        <h1>互联网优质博主导航</h1>
        <nav>
          <ul>
            <li><a href="/">全部</a></li>
            <li><a href="/categories/ai">AI</a></li>
            <li><a href="/categories/programming">编程</a></li>
            {/* 添加更多分类链接 */}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <section className={styles.bloggerList}>
          {/* 博主信息 */}
          <article className={styles.blogger}>
            <Image src="/images/avatar1.jpg" alt="博主头像" width={150} height={150} />
            <h2>博主名称</h2>
            <p>博主简介</p>
            <div className={styles.socialLinks}>
              <a href="公众号二维码链接" target="_blank">公众号</a>
              <a href="微博主页链接" target="_blank">微博</a>
              <a href="Twitter主页链接" target="_blank">Twitter</a>
            </div>
          </article>
          {/* 添加更多博主信息 */}
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 互联网优质博主导航. All rights reserved.</p>
      </footer>
    </div>
  );
}