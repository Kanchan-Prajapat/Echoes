import { format } from "date-fns";

import AppContainer from "@/styles/AppContainer";

import {
  NewEchoHeader,
  MediaUploader,
  EchoTitleInput,
  DatePickerCard,
  LocationInput,
  MoodSelector,
  MoodPickerModal,
  JournalEditor,
  SaveEchoButton,
} from "@/components/NewEcho";

import CalendarModal from "@/components/Calendar/CalendarModal";

import { moods } from "@/components/NewEcho/moods";

import useNewEcho from "@/hooks/useNewEchoForm";

interface Props {
  onSaved: () => void;
  editingEchoId?: string;
}

export default function NewEchoView({
  onSaved,
  editingEchoId,
}: Props) {

  const {

    /* Form */

    title,
    setTitle,

    description,
    setDescription,

    location,
    setLocation,

    date,
    setDate,

    selectedMood,
    setSelectedMood,

    media,

    /* UI */

    saving,

    editingEcho,

    showCalendar,
    setShowCalendar,

    showMoodPicker,
    setShowMoodPicker,

    /* Upload */

    fileInputRef,

    handleFilesSelected,

    coverMediaId,
    setCover,
    removeMedia,
    handleSave,

  } = useNewEcho({

    editingEchoId,

    onSaved,

  });

  return (

    <AppContainer className="py-8 pb-32">

      {/* Header */}

      <NewEchoHeader
        editing={!!editingEcho}
      />

      {/* Upload */}

   <MediaUploader
    media={media}
    coverMediaId={coverMediaId}
    fileInputRef={fileInputRef}
    onBrowse={handleFilesSelected}
    onRemove={removeMedia}
    onSetCover={setCover}
/>
      {/* Form */}

      <div className="mt-8 space-y-6">

        <EchoTitleInput
          value={title}
          onChange={setTitle}
        />

        <DatePickerCard
          date={date}
          onClick={() =>
            setShowCalendar(true)
          }
        />

        <LocationInput
          value={location}
          onChange={setLocation}
        />

        <MoodSelector
          mood={
            moods.find(
              (m) =>
                m.emoji === selectedMood
            )
          }
          onClick={() =>
            setShowMoodPicker(true)
          }
        />

        <JournalEditor
          value={description}
          onChange={setDescription}
        />

        <SaveEchoButton
          loading={saving}
          editing={!!editingEcho}
          disabled={
            title.trim() === "" ||
            media.length === 0
          }
          onClick={handleSave}
        />

      </div>

      {/* Calendar */}

      <CalendarModal
        open={showCalendar}
        value={
          date
            ? new Date(date)
            : new Date()
        }
        onClose={() =>
          setShowCalendar(false)
        }
        onSelect={(selectedDate) =>
          setDate(
            format(
              selectedDate,
              "yyyy-MM-dd"
            )
          )
        }
      />

      {/* Mood */}

      <MoodPickerModal
        open={showMoodPicker}
        moods={moods}
        selectedMood={selectedMood}
        onClose={() =>
          setShowMoodPicker(false)
        }
        onSelect={(mood) =>
          setSelectedMood(
            mood.emoji
          )
        }
      />

    </AppContainer>

  );

}