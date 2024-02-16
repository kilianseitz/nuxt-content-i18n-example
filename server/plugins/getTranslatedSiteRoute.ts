export default defineNitroPlugin((nitroApp) => {
  function getOtherPath(oldPath: string, locale: string): string {
    const enPathMap: Map<string, string> = new Map([
      ['en', 'de'],
      ['about', 'ueber'],
    ]);
    const dePathMap: Map<string, string> = new Map(
      Array.from(enPathMap.entries()).map(([key, value]) => [value, key])
    );
    if (locale === 'en') {
      return oldPath
        .split('/')
        .filter((value) => value !== '')
        .map((value) => enPathMap.get(value))
        .join('/');
    } else if (locale === 'de') {
      return oldPath
        .split('/')
        .filter((value) => value !== '')
        .map((value) => dePathMap.get(value))
        .join('/');
    }
    return '/';
  }

  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    file.otherpath = getOtherPath(file._path, file._locale);
  });
});
