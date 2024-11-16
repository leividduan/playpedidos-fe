import { Plus } from 'lucide-react';

import { Button } from '../../../../components/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../../components/Dialog';
import { Input } from '../../../../components/Input';

import { useNewCompanyController } from './useNewCompanyController';

export function NewCompany() {
  const {
    register,
    handleSubmit,
    errors,
    isPending,
    handleDocumentChange,
    open,
    toggleOpen,
  } = useNewCompanyController();

  return (
    <Dialog open={open}>
      <DialogTrigger asChild onClick={toggleOpen}>
        <div
          className="flex flex-col justify-center items-center"
          role="button"
        >
          <div className="bg-gray-50 rounded-full w-32 h-32 flex items-center justify-center border border-gray-300 border-dashed hover:border-solid hover:border-gray-300 hover:bg-gray-200 transition-all">
            <Plus size={64} className="text-gray-900" />
          </div>
          <span className="mt-4 text-xl text-gray-600 tracking-[-1px]">
            Nova empresa
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" closeFn={toggleOpen}>
        <DialogHeader>
          <DialogTitle>Criar nova empresa</DialogTitle>
          <DialogDescription>
            Crie uma nova empresa para começar a usar o playpedidos.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <form
            id="new-company-form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <Input
              type="text"
              placeholder="Nome"
              error={errors.name?.message}
              {...register('name')}
            />
            <Input
              type="text"
              placeholder="CNPJ"
              error={errors.document?.message}
              {...register('document')}
              onChange={handleDocumentChange}
            />
          </form>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            form="new-company-form"
            className="mt-2 w-full"
            isLoading={isPending}
          >
            Criar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
