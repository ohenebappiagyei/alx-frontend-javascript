import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    // Call signUpUser and uploadPhoto concurrently using Promise.all
    const [signUpResult, uploadResult] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName).catch(error => ({ status: 'rejected', value: error })),
    ]);

    // Prepare the response structure
    return [
      {
        status: signUpResult.status,
        value: signUpResult.value || signUpResult.error,
      },
      {
        status: uploadResult.status,
        value: uploadResult.value || uploadResult.error,
      },
    ];
  } catch (error) {
    // Handle any unexpected errors here
    console.error("An unexpected error occurred:", error);
  }
}
