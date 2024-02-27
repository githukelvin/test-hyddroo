// composables/useAssetPath.js

export const useAssetPath = () => {
  const getAssetPath = (path) => {
    return import.meta.env.BASE_URL + path;
  };

  return {
    getAssetPath,
  };
};
