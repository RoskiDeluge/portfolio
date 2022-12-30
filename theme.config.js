import React from 'react'
import Link from 'next/link'
import { Github, Twitter, Instagram } from '@icons-pack/react-simple-icons'
const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '4rem' }}>
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}
      >
        <Link href="https://github.com/roskideluge">
          <Github title="RD Github" color="#808080" size={24} />
        </Link>
        <span style={{ paddingLeft: '1rem' }}>
          <Link href="https://twitter.com/RoskiDeluge">
            <Twitter title="RD Twitter" color="#808080" size={24} />
          </Link>
        </span>
        <span style={{ paddingLeft: '1rem' }}>
          <Link href="https://instagram.com/roskideluge">
            <Instagram title="RD Instagram" color="#808080" size={24} />
          </Link>
        </span>
      </span>
      <time>{YEAR}</time> © Roberto L. Delgado.
      <a href="/feed.xml">RSS</a>
      <br />
      <span>
        Set in <Link href="https://authentic.website/sans">Authentic Sans</Link>
      </span>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
