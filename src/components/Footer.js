import React from 'react';

function Footer({ teamHeroes }) {
  return (
    <footer
      className={
        !teamHeroes.error && teamHeroes.length !== 0
          ? 'footer'
          : 'bottom footer'
      }
    >
      <div className='content has-text-centered has-text-white'>
        <p>
          <strong className='has-text-black'>SuperHero app</strong> por{' '}
          <a
            rel='noreferrer'
            href='https://www.linkedin.com/in/genaro-agustín-pássero-91698b21b'
            target='_blank'
          >
            Genaro A. Pássero
          </a>{' '}
          © 2021.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
