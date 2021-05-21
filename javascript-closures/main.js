function graduate(credential) {
  return fullName => {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');

const lawSchool = graduate('Esq.');

medicalSchool('Katie Fugate');
lawSchool('Katie Fugate');
