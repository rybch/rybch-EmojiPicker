import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiPickerComponent } from './emoji-picker.component';

describe('EmojiPickerComponent', () => {
  let component: EmojiPickerComponent;
  let fixture: ComponentFixture<EmojiPickerComponent>;

  beforeEach((() => {
    component = new EmojiPickerComponent();
  }));

  afterEach((() => {

  }));

  it('should toggle picker', () => {

    component.togglePicker();

    expect(component.isOpen).toBeTrue();

    component.togglePicker();

    expect(component.isOpen).toBeFalse();
  });

  it('should hide picker', () => {
    component.hidePicker();
    expect(component.isOpen).toBeFalse();
  });

  it('should emit emoji to parent', () => {
    component.emitEmoji(event, 'emoji');
    // expect(component).toBeFalse();
  });
});
