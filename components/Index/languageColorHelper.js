// languageColorHelper.js

export const getLanguageColor = (language) => {
    switch (language) {
      case 'JavaScript':
        return '#fcd34d';
      case 'None':
        return '#3498db';
      default:
        return '#777';
    }
  };
  