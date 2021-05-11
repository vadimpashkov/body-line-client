import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';

import {
  GetMassageTypes,
  GetMasseurs,
  GetRecordUserResponseType,
  SetRecord,
  SetRecordRequestType,
} from '../../server';

import {
  useCurrentMassageType,
  useCurrentMasseur,
  useServerMutation,
  useServerQuery,
} from '../../hooks';

import { Input } from '../Input';
import { Form } from '../Form';

import {
  RecordFormInput,
  RecordFormSelect,
  RecordFormOption,
} from './RecordForm.elements';

type RecordFormTypes = {
  onSubmit: (data: GetRecordUserResponseType) => void;
};

export const RecordForm: FC<RecordFormTypes> = ({
  onSubmit,
}: RecordFormTypes) => {
  const currentDate = new Date();
  const selectDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 1,
    9
  );

  const { masseur: ReduxMasseur } = useCurrentMasseur();
  const { massageType: ReduxMassageType } = useCurrentMassageType();

  const [selectedDate, setSelectedDate] = useState(selectDate);
  const [message, setMessage] = useState('');
  const [selectedMasseur, setSelectedMasseur] = useState(ReduxMasseur?.id);
  const [selectedMassageTypeId, setSelectedMassageTypeId] = useState(
    ReduxMassageType?.id
  );

  const {
    register,
    setValue,
    handleSubmit,
    errors,
  } = useForm<SetRecordRequestType>();

  const {
    mutate: record,
    error: recordError,
    data: recordData,
    isLoading,
  } = useServerMutation('setRecord', SetRecord);
  const { data: masseursData } = useServerQuery(
    'getMasseurs',
    GetMasseurs,
    undefined
  );
  const { data: massageTypesData } = useServerQuery(
    'getMassageTypes',
    GetMassageTypes,
    undefined
  );

  useEffect(() => {
    register('date', {
      validate: validateDate,
    });

    register('messeurId', {
      validate: validateSelect,
    });

    register('massageTypeId', {
      validate: validateSelect,
    });

    setValue('date', selectedDate);
    setValue('messeurId', selectedMasseur);
    setValue('massageTypeId', selectedMassageTypeId);
  }, []);

  useEffect(() => {
    if (recordData !== undefined) {
      onSubmit(recordData);
    }
  }, [isLoading]);

  const onSubmitSet = (data: SetRecordRequestType) => {
    record({
      messeurId: data.messeurId,
      massageTypeId: data.massageTypeId,
      date: data.date,
    });

    setValue('messeurId', '');
    setSelectedMasseur(0);
    setValue('date', '');
    setSelectedDate(selectDate);
    setValue('massageTypeId', '');
    setSelectedMassageTypeId(0);

    setMessage('Вы успешно записаны на сеанс');
  };

  const validateDate = (date: Date) => {
    const hours = date.getHours();

    if (hours > 22 || hours < 9) return 'Выберите рабочее время';
  };

  const validateSelect = (value: number) => {
    if (value === 0 || value === undefined) return 'Это поле обязательно';
  };

  const handleDateChange = (date: Date) => {
    setValue('date', date);
    setSelectedDate(date);
  };

  const handleMasseurIdChange = (masseurId: number) => {
    setValue('messeurId', masseurId);
    setSelectedMasseur(masseurId);
  };

  const handleMassageTypeIdChange = (massageTypeId: number) => {
    setValue('massageTypeId', massageTypeId);
    setSelectedMassageTypeId(massageTypeId);
  };

  return (
    <Form
      title={{ primary: 'Запись', secondary: 'на сеанс' }}
      button="Записаться"
      error={recordError?.message || message}
      onSubmit={handleSubmit(onSubmitSet)}
    >
      <Input message={errors.date?.message}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
          <DateTimePicker
            className="data-picker"
            label=""
            value={selectedDate}
            placeholder="Укажите дату и время"
            onChange={handleDateChange as any}
            cancelLabel="Отмена"
            disablePast
            format="dd.MM.yyyy HH:mm"
            fullWidth
            minutesStep={60}
            maxDate={new Date(currentDate.setMonth(currentDate.getMonth() + 1))}
            ampm={false}
            views={['hours']}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </MuiPickersUtilsProvider>
      </Input>
      <Input message={errors.messeurId?.message}>
        <RecordFormSelect
          as="select"
          name="messeurId"
          value={selectedMasseur}
          onChange={(event: any) =>
            handleMasseurIdChange(Number(event.target.value))
          }
        >
          <RecordFormOption value="">Выберите мастера</RecordFormOption>
          {masseursData?.map((masseur) => (
            <RecordFormOption key={masseur.id} value={masseur.id}>
              {masseur.firstName} {masseur.lastName}
            </RecordFormOption>
          ))}
        </RecordFormSelect>
      </Input>
      <Input message={errors.massageTypeId?.message}>
        <RecordFormSelect
          as="select"
          name="massageTypeId"
          value={selectedMassageTypeId}
          onChange={(event: any) => {
            handleMassageTypeIdChange(Number(event.target.value));
          }}
        >
          <RecordFormOption value="">Выберите вид массажа</RecordFormOption>
          {massageTypesData?.map((massageType) => (
            <RecordFormOption key={massageType.id} value={massageType.id}>
              {massageType.name}
            </RecordFormOption>
          ))}
        </RecordFormSelect>
      </Input>
    </Form>
  );
};
