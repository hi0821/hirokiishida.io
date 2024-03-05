import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import Link from 'next/link'
import Section from '@/components/Section'
import styles from 'styles/posts.module.scss'

// ブログ記事ページ
export default async function BlogPost({ params }) {
  // URLのパラメータから該当するファイル名を取得 (今回は hello-world)
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const title = data.title;
  const cat = data.cat;
  const date = data.date;
  const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
  const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

  return (
    <Section>
      <div className={styles.post}>
        <h1 className={styles.post_heading}>{title}</h1>
        <span className={styles.post_category}>{cat}</span>
        <span className={styles.post_date}>{date}</span>
        <div className={styles.post_block} dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
        <div className={styles.post_backButton}>
          <Link href="/works/">BACK</Link>
        </div>
      </div>
    </Section>
  );
}