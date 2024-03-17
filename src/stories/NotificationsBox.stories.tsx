import { ComponentProps, createSignal, onCleanup, onMount } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { NotificationType, NotificationsBox } from '@/components/NotificationsBox';

const meta = {
  title: 'Components/Global/Notifications Box',
  component: NotificationsBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NotificationsBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notifications: [
      {
        message: 'Test 1',
        type: 'success',
      },
      {
        message: 'Test 2',
        type: 'info',
      },
      {
        message: 'Test 3',
        type: 'error',
      },
    ],
  },
};

export const NewNotifications: Story = {
  render: () => {
    const [notifications, setNotifications] = createSignal<
      ComponentProps<typeof NotificationsBox>['notifications']
    >([]);

    const addNotification = (
      notification: ComponentProps<typeof NotificationsBox>['notifications'][number],
    ) => {
      setNotifications((notifications) => [...notifications, notification]);
      setTimeout(() => {
        setNotifications((notifications) => notifications.slice(1));
      }, 5000);
    };

    onMount(() => {
      const timeout1 = setTimeout(() => {
        addNotification({ type: NotificationType.SUCCESS, message: 'Objednávka úspěšně vytvořena!' });
      }, 1000);

      const timeout2 = setTimeout(() => {
        addNotification({ type: NotificationType.INFO, message: 'Proces objednávky můžete sledovat!' });
      }, 2000);

      const timeout3 = setTimeout(() => {
        addNotification({
          type: NotificationType.ERROR,
          message: 'Při zpracování objednávky nastala chyba.',
        });
      }, 5000);

      onCleanup(() => [timeout1, timeout2, timeout3].forEach((timeout) => clearTimeout(timeout)));
    });

    return <NotificationsBox notifications={notifications()} />;
  },
};

export const NewNotificationsWithOnePermanent: Story = {
  render: () => {
    const [notifications, setNotifications] = createSignal<
      ComponentProps<typeof NotificationsBox>['notifications']
    >([
      {
        type: NotificationType.INFO,
        message:
          'Upozorňujeme, že prodleva v doručení objednávek je vyšší než obvykle. Momentální čas doručení je 120 minut.',
      },
    ]);

    const addNotification = (
      notification: ComponentProps<typeof NotificationsBox>['notifications'][number],
    ) => {
      setNotifications((notifications) => [...notifications, notification]);
      setTimeout(() => {
        setNotifications((notifications) => [...notifications.slice(0, 1), ...notifications.slice(2)]);
      }, 5000);
    };

    onMount(() => {
      const timeout1 = setTimeout(() => {
        addNotification({ type: NotificationType.SUCCESS, message: 'Objednávka úspěšně vytvořena!' });
      }, 1000);

      const timeout2 = setTimeout(() => {
        addNotification({ type: NotificationType.INFO, message: 'Proces objednávky můžete sledovat!' });
      }, 2000);

      const timeout3 = setTimeout(() => {
        addNotification({
          type: NotificationType.ERROR,
          message: 'Při zpracování objednávky nastala chyba.',
        });
      }, 5000);

      onCleanup(() => [timeout1, timeout2, timeout3].forEach((timeout) => clearTimeout(timeout)));
    });

    return <NotificationsBox notifications={notifications()} />;
  },
};
