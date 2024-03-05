import styles from 'styles/layout.module.scss'
import Section from '@/components/Section'
import Heading from '@/components/Heading';

export default function About() {
  return (
    <>
      <Section>
        <Heading text="ABOUT" />
        <p className={styles.text}>          
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Section>

      <Section>
        <Heading text="SKILLS" />
        <p className={styles.text}>
          •HTML<br />
          •CSS(SCSS)<br />
          •JavaScript(jQuery)<br />
          •Next.js<br />
          •WordPress<br />
          •Adobe Illustrator<br />
          •Adobe Photoshop<br />
          •Adobe XD<br />
          •Adobe Premier Pro<br />
        </p>
      </Section>
    </>
  );
}