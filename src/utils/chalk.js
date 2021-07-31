export default class Chalk {
  static red(...msg) {
    return [`%c${msg.join(', ')}`, 'color:#ff4433'];
  }
}
