<script setup lang="ts">
import type { InputProps } from '@/types/ui/input.type';

interface Props extends Partial<InputProps> {
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  required: false,
  readonly: false,
  fullWidth: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  focus: [event: Event];
  blur: [event: Event];
  keyup: [event: Event];
  keydown: [event: Event];
  enter: [event: Event];
}>();

const getInputClasses = () => {
  const baseClasses = [
    'border rounded-lg transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
  ];

  // Classes de tamanho
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  // Estado de erro
  if (props.errorMessage) {
    baseClasses.push('border-red-500 focus:ring-red-500 focus:border-red-500');
  } else {
    baseClasses.push('border-gray-300');
  }

  // Padding do ícone esquerdo
  if (props.leftIcon) {
    baseClasses.push('pl-10');
  }

  // Padding do ícone direito
  if (props.rightIcon) {
    baseClasses.push('pr-10');
  }

  const classes = [...baseClasses, sizeClasses[props.size]];

  if (props.fullWidth) {
    classes.push('w-full');
  }

  return classes.join(' ');
};

const handleInput = (event: Event) => {
  const target = event.target as { value: string };
  emit('update:modelValue', target.value);
};

const handleKeyup = (event: Event) => {
  emit('keyup', event);
  if ((event as { key: string }).key === 'Enter') {
    emit('enter', event);
  }
};
</script>

<template>
  <div class="space-y-1" :class="{ 'w-full': fullWidth, 'flex-1': !fullWidth }">
    <!-- Rótulo -->
    <label v-if="label" class="block text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <!-- Container do Input -->
    <div class="relative" :class="{ 'w-full': fullWidth }">
      <!-- Ícone Esquerdo -->
      <div
        v-if="leftIcon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="leftIcon"
          />
        </svg>
      </div>

      <!-- Campo de Entrada -->
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :readonly="readonly"
        :class="getInputClasses()"
        @input="handleInput"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        @keyup="handleKeyup"
        @keydown="emit('keydown', $event)"
      />

      <!-- Ícone Direito -->
      <div
        v-if="rightIcon"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="rightIcon"
          />
        </svg>
      </div>
    </div>

    <!-- Texto de Ajuda -->
    <p v-if="helpText && !errorMessage" class="text-sm text-gray-500">
      {{ helpText }}
    </p>

    <!-- Mensagem de Erro -->
    <p v-if="errorMessage" class="text-sm text-red-600">
      {{ errorMessage }}
    </p>
  </div>
</template>
