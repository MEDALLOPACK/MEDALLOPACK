# MEDALLOPACK

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-brightgreen?logo=github)
![Version](https://img.shields.io/badge/AutoGitHub-v11.0-4ade80)
![License](https://img.shields.io/badge/license-MIT-blue)
![Deploy](https://img.shields.io/badge/deploy-automático-success)

> Sitio tipo **Custom** publicado automáticamente con [AutoGitHub Publisher v11.0](https://github.com).

## 🌐 Sitio en vivo
**[https://MEDALLOPACK.github.io/MEDALLOPACK/](https://MEDALLOPACK.github.io/MEDALLOPACK/)**

## 🗂 Estructura del proyecto
```
MEDALLOPACK/
├── index.html              # Página principal (Custom)
├── 404.html                # Página de error personalizada
├── robots.txt              # Directivas SEO
├── sitemap.xml             # Mapa del sitio
├── .nojekyll               # Build rápido en Pages
├── .gitignore              # Archivos ignorados
├── LICENSE                 # MIT
├── README.md               # Este archivo
└── .github/
    └── workflows/
        ├── backup.yml      # Backup semanal Google Drive
        └── ci.yml          # Validación automática
```

## 🤖 Workflows CI/CD
| Workflow | Trigger | Descripción |
|----------|---------|-------------|
| `backup.yml` | Domingos 00:00 UTC | Backup completo a Google Drive vía rclone |
| `ci.yml` | Push a `main` | Valida HTML, tamaño y estructura |

## 🔐 Secrets requeridos
| Secret | Descripción |
|--------|-------------|
| `RCLONE_CONF` | Config de rclone para Google Drive (base64) |

### Configurar rclone:
```bash
curl https://rclone.org/install.sh | sudo bash
rclone config  # Nombre: gdrive
cat ~/.config/rclone/rclone.conf | base64  # Copiar como secret
```

## 🚀 Actualizar el sitio
```bash
git clone https://github.com/MEDALLOPACK/MEDALLOPACK.git
cd MEDALLOPACK
# Edita tus archivos...
git add . && git commit -m "✨ Actualización" && git push
```

---
*Generado automáticamente el 17 de marzo de 2026 con ⚡ AutoGitHub Publisher v11.0 · © 2025 Wil Rivera*
