import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { Send } from 'lucide-react';
import Button from '../ui/Button';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import TextareaField from '../ui/TextareaField';
import { analysisSchema } from '../../validations/analysisSchema';
import { SEVERITY_OPTIONS } from '../../utils/constants';

function AnalyzeForm({ onSubmit, isLoading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(analysisSchema),
    defaultValues: {
      organization: '',
      asset: '',
      finding: '',
      severity: 'Medium',
    },
  });

  function handleInvalid() {
    toast.error('Please fix the highlighted validation errors.');
  }

  return (
    <form
      className="rounded-md border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      onSubmit={handleSubmit(onSubmit, handleInvalid)}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          id="organization"
          label="Organization Name"
          placeholder="Example: Acme Finance"
          error={errors.organization?.message}
          {...register('organization')}
        />
        <InputField
          id="asset"
          label="Asset Name"
          placeholder="Example: Payment API"
          error={errors.asset?.message}
          {...register('asset')}
        />
      </div>

      <div className="mt-4">
        <TextareaField
          id="finding"
          label="Security Finding"
          placeholder="Describe the vulnerability or security issue..."
          error={errors.finding?.message}
          {...register('finding')}
        />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-end">
        <SelectField id="severity" label="Severity" error={errors.severity?.message} {...register('severity')}>
          {SEVERITY_OPTIONS.map((severity) => (
            <option key={severity} value={severity}>
              {severity}
            </option>
          ))}
        </SelectField>

        <Button type="submit" isLoading={isLoading} className="w-full">
          <Send size={17} />
          Analyze
        </Button>
      </div>
    </form>
  );
}

export default AnalyzeForm;
