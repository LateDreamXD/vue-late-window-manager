class LWMLogger {
	private prefix = '[Vue Late Window Manager]';
	private enabled = true;
	public _setEnabled = (enabled: boolean) => this.enabled = enabled;
	public info = (...args: any[]) => this.enabled && console.info(this.prefix, ...args);
	public log = (...args: any[]) => this.enabled && console.log(this.prefix, ...args);
	public warn = (...args: any[]) => this.enabled && console.warn(this.prefix, ...args);
	public error = (...args: any[]) => this.enabled && console.error(this.prefix, ...args);
	public debug = (...args: any[]) => this.enabled && console.debug(this.prefix, ...args);
}
export default new LWMLogger();
