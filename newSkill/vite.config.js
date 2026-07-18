import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],


  optimizeDeps: {
    disabled: false
  },
  cacheDir: 'C:/vite-cache' // move cache out of OneDrive


})













// /* Responsive Design */
// @media (max-width: 768px) {
//   .typing-text {
//     font-size: 2.5rem;
//     min-height: 3rem;
//   }

//   .hero-subtitle {
//     font-size: 1.1rem;
//   }

//   .section-title {
//     font-size: 2rem;
//   }

//   .timeline::before {
//     left: 30px;
//   }

//   .timeline-item.left .timeline-content,
//   .timeline-item.right .timeline-content {
//     margin-left: 80px;
//     margin-right: 0;
//     text-align: left;
//   }

//   .timeline-item.left .timeline-marker,
//   .timeline-item.right .timeline-marker {
//     left: 5px;
//   }

//   .nav-buttons {
//     gap: 0.5rem;
//   }

//   .btn-login,
//   .btn-signup {
//     padding: 0.5rem 1rem;
//     font-size: 0.9rem;
//   }

//   .media-card {
//     width: 280px;
//     height: 210px;
//   }

//   .video-placeholder,
//   .image-placeholder {
//     height: 150px;
//   }
// }

