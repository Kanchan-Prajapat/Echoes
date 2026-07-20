import { useState } from "react";
import AppContainer from "@/styles/AppContainer";
import useAudio from "@/hooks/useAudio";
import { Play, Pause} from "lucide-react";
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
  MusicSelector,
 
} from "@/components/NewEcho";



import MusicPickerModal from "./Music/MusicPickerModal";


import CalendarModal from "@/components/Modals/CalendarModal";

import { moods } from "@/components/NewEcho/moods";

import useNewEcho from "@/hooks/useNewEchoForm";

interface Props {
  onSaved: () => void;
  editingEchoId?: string;
   onBack: () => void;
}

export default function NewEchoView({
  onSaved,
  editingEchoId,
  onBack,
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

selectedMusic,
setSelectedMusic,

handleSave,

} = useNewEcho({

editingEchoId,
onSaved,

  });


const {
  current,
  playing,
  play,
  pause,
} = useAudio();

const isPreviewPlaying =
  playing &&
  current?.id === selectedMusic?.id;

  const [showMusicPicker, setShowMusicPicker] =
useState(false);

  return (

    <AppContainer className="py-8 pb-32">

      {/* Header */}

   <NewEchoHeader
  editing={!!editingEcho}
  onBack={onBack}
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
  label="Memory Date"
  placeholder="Choose memory date"
  date={date}
  onClick={() => setShowCalendar(true)}
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

<MusicSelector
  music={selectedMusic}
  onClick={() =>
    setShowMusicPicker(true)
  }
/>

{selectedMusic && (
  <div
    className="
      mt-3
      rounded-2xl
      border
      border-violet-200
      bg-violet-50
      p-4
      flex
      items-center
      justify-between
    "
  >
    <div className="flex items-center gap-3">
      <img
        src={selectedMusic.image}
        alt={selectedMusic.title}
        className={`
          h-14
          w-14
          rounded-xl
          object-cover
          transition
          ${
            isPreviewPlaying
              ? "animate-pulse"
              : ""
          }
        `}
      />

      <div>
        <h3 className="font-semibold">
          {selectedMusic.title}
        </h3>

        <p className="text-sm text-gray-500">
          {selectedMusic.artist}
        </p>
      </div>
    </div>

    <button
      onClick={() => {
        if (isPreviewPlaying) {
          pause();
        } else {
          play({
            id: selectedMusic.id,
            title: selectedMusic.title,
            artist: selectedMusic.artist,
            cover: selectedMusic.image?? "",
            url: selectedMusic.audio,
            duration: selectedMusic.duration,
            source: "echoes",
          });
        }
      }}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        bg-violet-600
        text-white
        hover:bg-violet-700
      "
    >
      {isPreviewPlaying ? (
        <Pause size={18} fill="white" />
      ) : (
        <Play size={18} fill="white" />
      )}
    </button>
  </div>
)}

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
       onSelect={(selectedDate) => {
  setDate(selectedDate);
  setShowCalendar(false);
}}
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

<MusicPickerModal
open={showMusicPicker}
selectedMusicId={selectedMusic?.id}
onClose={() => setShowMusicPicker(false)}
onSelect={(music) => {
    setSelectedMusic(music);
    setShowMusicPicker(false);
}}
/>
    </AppContainer>

  );

}