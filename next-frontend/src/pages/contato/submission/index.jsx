import { useRouter } from 'next/router';

export default function Submission() {
    const router = useRouter();
    // If the 'success' flag (in the URL) is set to 'true', then the submission was successful.
    const submissionStatus = router.query?.success && router.query.success === 'true';

    return submissionStatus ? <h1>Sucesso!</h1> : <h1>Falha!</h1>;
}

// LER
// https://css-tricks.com/how-to-create-a-contact-form-with-next-js-and-netlify/
