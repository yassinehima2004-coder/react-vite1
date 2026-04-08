import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-10 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-500">H.Yassine</h2>
          <p className="mt-2 text-sm text-slate-400">
            DEVELOPPEUR FULL STACK AVEC COMPETENCES EN IA
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-slate-400">yassinehima2004@gmail.com</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yassinehima2004@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
            aria-label="Gmail"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/yassine-hima-437835375"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-blue-500 hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </a>

          <a
            href="https://github.com/yassinehima2004-coder"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-violet-500 hover:text-violet-500"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © 2026 H.Yassine . All rights reserved.
      </div>
    </footer>
  );
}