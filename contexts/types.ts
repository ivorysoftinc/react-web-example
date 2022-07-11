import { FormikContextType } from 'formik';
import { ChangeEvent, MouseEvent } from 'react';
import {
  EventTypes,
  HandleEventButtonClick,
  ICalendarEvent,
  IEvent,
  ILocalEvent,
  PropertyEvent,
} from 'stores/types';
import { POPUP_ACTION } from 'utils/constants';

export interface HandleActionEventProps {
  e: MouseEvent<HTMLElement>;
  confirmingEvent?: ICalendarEvent;
}

export interface FormStateType {
  isSubmitted: boolean;
  isDeletingEvent: boolean;
  isDuplicateEvent: boolean;
  isDirtyForm: boolean;
  confirmEventType: POPUP_ACTION;
  activeEventType: EventTypes;
  isOpenPopup: boolean;
  isEventList: boolean;
}

export enum EventTriggers {
  sign_in = 'sign_in',
  sign_in_success = 'sign_in_success',
  sign_in_failure = 'sign_in_failure',

  sign_in_with_google = 'sign_in_with_google',
  sign_in_with_google_success = 'sign_in_with_google_success',
  sign_in_with_google_failure = 'sign_in_with_google_failure',

  open_kpi_hub = 'open_kpi_hub',

  create_campaign_button_clicked = 'create_campaign_button_clicked',

  create_new_campaign = 'create_new_campaign',
  create_new_campaign_success = 'create_new_campaign_success',
  create_new_campaign_failure = 'create_new_campaign_failure',

  cancel_campaign_creating = 'cancel_campaign_creating',

  close_campaign_overview = 'close_campaign_overview',

  close_event_overview = 'close_event_overview',

  delete_campaign = 'delete_campaign',
  delete_campaign_success = 'delete_campaign_success',
  delete_campaign_failure = 'delete_campaign_failure',

  save_edited_campaign = 'save_edited_campaign',
  save_edited_campaign_success = 'save_edited_campaign_success',
  save_edited_campaign_failure = 'save_edited_campaign_failure',

  save_edited_activity = 'save_edited_activity',
  save_edited_activity_success = 'save_edited_activity_success',
  save_edited_activity_failure = 'save_edited_activity_failure',

  add_activity_button_clicked = 'add_activity_button_clicked',

  activity_subtype_selected = 'activity_subtype_selected',

  start_date_selected = 'start_date_selected',
  end_date_selected = 'end_date_selected',

  products_selected = 'products_selected',

  currency_selected = 'currency_selected',

  google_budget_selected = 'google_budget_selected',

  partner_budget_selected = 'partner_budget_selected',

  cancel_activity_creating = 'cancel_activity_creating',

  create_new_activity = 'create_new_activity',
  create_new_activity_success = 'create_new_activity_success',
  create_new_activity_failure = 'create_new_activity_failure',

  create_new_product = 'create_new_product',
  create_new_product_success = 'create_new_product_success',
  create_new_product_failure = 'create_new_product_failure',

  create_new_tag = 'create_new_tag',
  create_new_tag_success = 'create_new_tag_success',
  create_new_tag_failure = 'create_new_tag_failure',

  open_settings = 'open_settings',

  logout_clicked = 'logout_clicked',
  logout_from_the_system_success = 'logout_from_the_system_success',
  logout_from_the_system_failure = 'logout_from_the_system_failure',

  currency_change = 'currency_change',

  filters_opened = 'filters_opened',

  activity_type_filters_selected = 'activity_type_filters_selected',

  activity_subtype_filters_selected = 'activity_subtype_filters_selected',

  products_filters_selected = 'products_filters_selected',

  partners_filters_selected = 'partners_filters_selected',

  filters_reset = 'filters_reset',

  filters_closed = 'filters_closed',

  view_selector_clicked = 'view_selector_clicked',

  weeks_view_selected = 'weeks_view_selected',

  month_view_selected = 'month_view_selected',

  list_view_selected = 'list_view_selected',

  quarter_view_selected = 'quarter_view_selected',

  calendar_activity_clicked = 'calendar_activity_clicked',

  activity_duplicate_clicked = 'activity_duplicate_clicked',

  activity_edit_clicked = 'activity_edit_clicked',

  activity_delete_clicked = 'activity_delete_clicked',

  activity_delete = 'activity_delete',
  activity_delete_success = 'activity_delete_success',
  activity_delete_failure = 'activity_delete_failure',

  activities_delete_success = 'activities_delete_success',
  activities_delete_failure = 'activities_delete_failure',

  activities_duplicate_success = 'activities_duplicate_success',
  activities_duplicate_failure = 'activities_duplicate_failure',

  activity_delete_canceled = 'activity_delete_canceled',

  calendar_campaign_clicked = 'calendar_campaign_clicked',

  campaign_duplicate_clicked = 'campaign_duplicate_clicked',

  campaign_edit_clicked = 'campaign_edit_clicked',

  campaign_delete_clicked = 'campaign_delete_clicked',

  campaign_delete = 'campaign_delete',
  campaign_delete_success = 'campaign_delete_success',
  campaign_delete_failure = 'campaign_delete_failure',

  campaign_delete_canceled = 'campaign_delete_canceled',

  quarter_changed = 'quarter_changed',

  profile_clicked = 'profile_clicked',

  set_default_currency = 'set_default_currency',

  set_default_partners = 'set_default_partners',

  set_default_products = 'set_default_products',

  clear_all_default_partners = 'clear_all_default_partners',

  clear_all_default_products = 'clear_all_default_products',

  close_my_account = 'close_my_account',

  save_changes_at_my_account = 'save_changes_at_my_account',
  save_changes_at_my_account_success = 'save_changes_at_my_account_success',
  save_changes_at_my_account_failure = 'save_changes_at_my_account_failure',

  auth_user = 'auth_user',

  calendar_loaded = 'calendar_loaded',
}

export enum EventTrackingType {
  time_diff = 'time_diff',
}

type MeasureType = { start: EventTriggers; end: EventTriggers[]; type: EventTrackingType[] };

export type IMeasurement = {
  [key in EventTriggers]?: MeasureType;
};

export type ITrackingEvent = {
  [key in EventTriggers]?: number;
};

export interface ITrackingContext {
  trackEvent?: (eventName: EventTriggers) => void;
}

export interface ILocalEventContext {
  formState: FormStateType;
  localCalendarEvent: ICalendarEvent | null;
  isOpenForm: boolean;
  isDeletedEvent: boolean;
  activeFormik: FormikContextType<ILocalEvent>;
  campaignFormik: FormikContextType<ILocalEvent>;
  activityFormik: FormikContextType<ILocalEvent>;
  localEvent: ILocalEvent | null;
  localEventActivity: ILocalEvent | null;
  closeModal: () => void;
  selectEventForEditing: (event: IEvent) => void;
  setIsDeletedEvent: (isDeletedEvent: boolean) => void;
  setIsOpenForm: (isOpenForm: boolean) => void;
  duplicateEvent: (event: IEvent) => void;
  confirmDeleteEvent: ({ e, selectedEvent }: HandleEventButtonClick) => void;
  setFormState: React.Dispatch<React.SetStateAction<FormStateType>>;
  setLocalEventActivity: React.Dispatch<React.SetStateAction<ILocalEvent>>;
  handleChangeLocalEvent: (e: ChangeEvent, id: PropertyEvent, value: string) => void;
  onSubmit: (values: ILocalEvent) => Promise<void>;
  handleClickAddActivity: () => void;
  handleClickCloseForms: () => void;
  onClickCancelModal: () => void;
  confirmCancelEvent: ({ e, selectedEvent }: HandleEventButtonClick) => void;
  selectPopupAction: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface ICustomAnalyticsEvent {
  from: EventTriggers;
  to: EventTriggers;
  timeDiff: number;
}

export interface GetModifiedStateProps {
  id: PropertyEvent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  prevState: ILocalEvent;
}

export interface GetModifiedCalendarStateProps {
  id: PropertyEvent;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  prevState: ICalendarEvent;
}

export interface IMultipleEditContext {
  selectedIds: number[];
  allSelect: boolean;
  isSelectedEventsPopup: boolean;
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  setAllSelect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSelectedEventPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleChangeSelect: (selectItem: SelectIdType) => void;
  onClickSelectedPopup: () => void;
  handleDeleteEvent: (e: MouseEvent<HTMLButtonElement>, id: number, isSelect: boolean) => void;
}

export type SelectIdType = {
  id: number;
  selected: boolean;
};
