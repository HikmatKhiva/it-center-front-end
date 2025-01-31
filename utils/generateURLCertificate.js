export const generateURLCertificate = (groupId, studentId) => {
  return `/certificate/?code=${studentId}/${groupId}`;
};
