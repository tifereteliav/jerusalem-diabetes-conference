# Global System Constraints & Guardrails

This document establishes the systemic behavioral rules governing all agents working on the Jerusalem Diabetes Conference (JDC) codebase. These constraints guarantee visual preservation, language protocols, and code safety.

---

## 🛡️ Rule 1: Strict UI Layout Preservation
- **Preservation Policy**: No agent is permitted to delete, replace, or alter core visual structures (including circular hero layouts, sunset background panels, or selected image assets) without explicit, unambiguous instructions from the user.
- **Visual Safety**: Structural layout patterns must remain locked during styling or copy adjustments.

---

## 🌐 Rule 2: Language & Localization Protocol
- **RTL Hebrew Alignment**: All public-facing string generations, labels, and text fields must default to Hebrew (`dir="rtl"`) with high-contrast, premium typography (*Heebo* / *Rubik*).
- **Medical Terminology Alignment**: Terminology must align precisely with clinical and technological conference standards (e.g., matching the invitation details, guest speaker titles, and clinical topics).

---

## 🏗️ Rule 3: Modification Guardrails
- **Targeted Replacements**: Copy or link updates must be performed as local string replacements within the target React components.
- **Architectural Stability**: Do not re-architect, divide, or rebuild the underlying component structures (e.g., splitting a parent page into isolated pages) when performing simple content changes.
- **Build Checks**: Every file modification must be validated by running a local build pipeline to prevent compilation drift.
