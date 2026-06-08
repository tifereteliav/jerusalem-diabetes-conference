# Interactive Form Architect Skill

## Description
This skill defines the development patterns for constructing complex, multi-step feedback forms, managing field validations, and mapping inputs to database entries (like Google Forms pre-filled link IDs).

## Operational Capabilities
1. **Dynamic Form Layouts**: Building slide-based or accordion-style multi-step forms that guide the user step-by-step.
2. **Validation Schema Engineering**: Checking email formats, numeric values (e.g. clinic numbers), and ensuring required fields are populated before submission.
3. **Google Forms Entry Mapping**: Reverse-engineering pre-filled URL keys to map React form inputs to backend database tags (e.g., mapping a text field to `entry.1049283749`).
4. **Resilient Network Handlers**:
   - Sending background POST requests using the `no-cors` fetch mode.
   - Managing queue buffers in `localStorage` in case of offline submission.
   - Providing visual success/failure states (e.g. triggering congratulations canvas confetti on success).
