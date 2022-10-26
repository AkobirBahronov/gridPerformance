import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "autTranslate",
	pure: true
})
export class AutTranslatePipe implements PipeTransform {
	constructor() { }

	transform(source: string, replaces?: string[]): string {
		return source;
	}
}
