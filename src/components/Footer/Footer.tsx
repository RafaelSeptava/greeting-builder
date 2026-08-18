// Footer.tsx

export function Footer() {
  return (
    <footer class="mt-6 text-center space-y-2">
      <p class="text-slate-400 font-medium text-xs tracking-wide">
        Created by{" "}
        <span class="text-cyan-300 font-semibold">Rafael Septava</span>
      </p>
      <nav aria-label="Social Media" class="text-xs">
        <ul class="flex items-center justify-center space-x-4">
          <li>
            <a
              href="https://www.instagram.com/rafaelseptava"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200 flex items-center gap-1 font-medium"
            >
              Instagram
            </a>
          </li>
          <li aria-hidden="true" class="text-white select-none">
            •
          </li>
          <li>
            <a
              href="https://github.com/RafaelSeptava"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200 flex items-center gap-1 font-medium"
            >
              GitHub
            </a>
          </li>
          <li aria-hidden="true" class="text-white select-none">
            •
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rafael-septava-254125328"
              target="_blank"
              rel="noopener noreferrer"
              class="text-cyan-400 hover:text-fuchsia-400 transition-colors duration-200 flex items-center gap-1 font-medium"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
