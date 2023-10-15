import {
  query,
  stagger,
  style,
  transition,
  trigger,
  animate
} from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    query('*', [
      style({ opacity: 0, transform: 'translateY(100%)' }),
      stagger(50, [
        animate(
          '250ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]),
    ]),
  ]),
]);
