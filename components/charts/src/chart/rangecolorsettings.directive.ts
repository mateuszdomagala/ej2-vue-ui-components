import { ComponentBase, EJComponentDecorator, allVue, gh, isExecute } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import { Options } from 'vue-class-component';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';
// {{VueImport}}

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
/* Start Options({
    inject: {
        custom: {
            default: null
        }
    }
}) End */

export class RangeColorSettingsDirective extends vueImport {
    constructor() {
        super(arguments);
    }
    public render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    }
    public updated(): void {
        if (!isExecute && this.custom) {
            this.custom();
        }
    }
    public getTag(): string {
        return 'e-rangecolorsettings';
    }
}
export const RangeColorSettingsPlugin = {
    name: 'e-rangecolorsettings',
    install(Vue: any) {
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
    }
}


@EJComponentDecorator({}, isExecute)
export class RangeColorSettingDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-rangecolorsetting';
    }
}
export const RangeColorSettingPlugin = {
    name: 'e-rangecolorsetting',
    install(Vue: any) {
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
    }
}