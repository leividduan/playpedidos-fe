import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { companiesService } from '../../../../../app/services/companiesService';
import formatDocument from '../../../../../app/utils/formatDocument';

export function useNewCompanyController() {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  function toggleOpen() {
    setOpen((prev) => !prev);
  }

  const schema = z.object({
    name: z
      .string()
      .min(1, 'Nome é obrigatório')
      .max(150, 'Nome deve conter no máximo 150 caracteres'),
    document: z
      .string()
      .min(1, 'CNPJ é obrigatório')
      .min(14, 'CNPJ deve conter 14 dígitos'),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit: hookFormSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isPending, mutateAsync } = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: FormData) => companiesService.create(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
      reset();
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ['companies'] });
    } catch {
      toast.error('Erro ao criar empresa');
    }
  });

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDocument(e.target.value);
    setValue('document', formatted);
  };

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    handleDocumentChange,
    open,
    toggleOpen,
  };
}
