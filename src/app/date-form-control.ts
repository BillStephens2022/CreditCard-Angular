import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    // if value isn't 0-9 or a forward slash (via regular expression)
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
