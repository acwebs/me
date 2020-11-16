// import React from "react";
// import Button from 'react-bulma-components/src/components/button';

// const ContactForm = () => {
//     const [form, setForm] = useState({ name: '', email: '' });
//     const update = (({ target }) => setForm({ ...form, [target.name]: target.value }))
//     return (
//       <>
//         <Field>
//           <Control>
//             <Label>Name</Label>
//             <Input name="name" value={form.name} onChange={update} />
//           </Control>
//         </Field>
//         <Field>
//           <Control>
//             <Label>Email</Label>
//             <Input name="email" value={form.email} onChange={update} />
//           </Control>
//         </Field>
//         <Button.Group>
//           <Button fullwidth rounded color="primary" onClick={() => console.log(form)}>Login</Button>
//         </Button.Group>
//       </>
//     );
//   }

//   export default ContactForm;