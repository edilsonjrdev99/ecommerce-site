<script setup lang="ts">
import type { ButtonType } from '@/types/ui/button.type';

interface Props extends Partial<ButtonType> {
  label: string;
}

defineSlots<{
  leftIcon?(): unknown;
  rightIcon?(): unknown;
}>();

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  fullWidth: false,
});

const emit = defineEmits<{
  click: [event: Event];
}>();

const getButtonClasses = () => {
  const baseClasses = [
    'inline-flex items-center justify-center font-semibold rounded-lg',
    'transition-all duration-200 cursor-pointer',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
  ];

  // Classes de tamanho
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Classes de variante
  const variantClasses = {
    primary: [
      'text-white focus:ring-emerald-500',
      'hover:opacity-90 hover:scale-105',
    ].join(' '),
    secondary: [
      'bg-gray-100 text-gray-900 border border-gray-300',
      'hover:bg-gray-200 focus:ring-gray-500',
    ].join(' '),
    outline: [
      'bg-transparent border-2 hover:bg-gray-50',
      'focus:ring-emerald-500',
    ].join(' '),
    ghost: [
      'bg-transparent text-gray-700',
      'hover:bg-gray-100 focus:ring-gray-500',
    ].join(' '),
  };

  const classes = [
    ...baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
  ];

  if (props.fullWidth) {
    classes.push('w-full');
  }

  return classes.join(' ');
};

const getButtonStyle = () => {
  if (props.variant === 'primary') {
    return {
      'background-color': 'var(--primary)',
    };
  }
  if (props.variant === 'outline') {
    return {
      'border-color': 'var(--primary)',
      color: 'var(--primary)',
    };
  }
  return {};
};

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>

<template>
  <button
    :class="getButtonClasses()"
    :style="getButtonStyle()"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Ícone Esquerdo -->
    <div v-if="(leftIcon || $slots.leftIcon) && !loading" class="mr-2">
      <slot name="leftIcon">
        <svg
          v-if="leftIcon"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path :d="leftIcon" />
        </svg>
      </slot>
    </div>

    <!-- Spinner de Carregamento -->
    <svg
      v-if="loading"
      class="animate-spin h-5 w-5 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <!-- Rótulo -->
    <span>{{ label }}</span>

    <!-- Ícone Direito -->
    <div v-if="(rightIcon || $slots.rightIcon) && !loading" class="ml-2">
      <slot name="rightIcon">
        <svg
          v-if="rightIcon"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path :d="rightIcon" />
        </svg>
      </slot>
    </div>
  </button>
</template>
