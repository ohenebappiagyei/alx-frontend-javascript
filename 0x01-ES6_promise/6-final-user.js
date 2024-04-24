import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [signUpResult, uploadResult] = await Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

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
}
