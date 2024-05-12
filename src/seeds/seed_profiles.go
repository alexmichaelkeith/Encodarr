package seeds

import (
	"transfigurr/models"

	"github.com/jinzhu/gorm"
)

func SeedProfiles(db *gorm.DB) {
	if !db.HasTable(&models.Seed{}) {
		db.CreateTable(&models.Seed{})
		db.Model(&models.Seed{}).AddUniqueIndex("idx_Name", "Name")
	}

	var seed models.Seed
	db.Where("Name = ?", "SeedProfiles").First(&seed)
	if seed.Name == "SeedProfiles" {
		return
	}
	defaultProfiles := []models.Profile{
		{
			Name:                      "Any",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "Any",
			Encoder:                   "",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "medium",
			Tune:                      "none",
			Profile:                   "auto",
			Level:                     "auto",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
		{
			Name:                      "h264",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "h264",
			Encoder:                   "libx264",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "medium",
			Tune:                      "none",
			Profile:                   "auto",
			Level:                     "auto",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
		{
			Name:                      "hevc",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "hevc",
			Encoder:                   "libx265",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "medium",
			Tune:                      "none",
			Profile:                   "auto",
			Level:                     "auto",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
		{
			Name:                      "mpeg4",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "mpeg4",
			Encoder:                   "mpeg4",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "",
			Tune:                      "",
			Profile:                   "",
			Level:                     "",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
		{
			Name:                      "vp8",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "vp8",
			Encoder:                   "libvpx",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "medium",
			Tune:                      "none",
			Profile:                   "auto",
			Level:                     "auto",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
		{
			Name:                      "vp9",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "vp9",
			Encoder:                   "libvpx-vp9",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "medium",
			Tune:                      "none",
			Profile:                   "auto",
			Level:                     "auto",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
		{
			Name:                      "av1",
			Container:                 "matroska",
			Extension:                 "mkv",
			PassThruCommonMetadata:    true,
			Flipping:                  false,
			Rotation:                  0,
			Cropping:                  "off",
			Limit:                     "none",
			Anamorphic:                "off",
			Fill:                      "none",
			Color:                     "black",
			Detelecine:                "off",
			InterlaceDetection:        "off",
			Deinterlace:               "off",
			DeinterlacePreset:         "default",
			Deblock:                   "off",
			DeblockTune:               "medium",
			Denoise:                   "off",
			DenoisePreset:             "light",
			DenoiseTune:               "none",
			ChromaSmooth:              "off",
			ChromaSmoothTune:          "none",
			Sharpen:                   "off",
			SharpenPreset:             "medium",
			Colorspace:                "off",
			Grayscale:                 false,
			Codec:                     "av1",
			Encoder:                   "libaom-av1",
			Framerate:                 "same as source",
			FramerateType:             "peak Framerate",
			QualityType:               "constant quality",
			ConstantQuality:           22,
			AverageBitrate:            15000,
			MultipassEncoding:         false,
			Preset:                    "7",
			Tune:                      "none",
			Profile:                   "auto",
			Level:                     "auto",
			FastDecode:                false,
			MapUntaggedAudioTracks:    true,
			MapUntaggedSubtitleTracks: true,
		},
	}
	for _, defaultProfile := range defaultProfiles {
		db.Create(&defaultProfile)
	}
	db.Create(&models.Seed{Name: "SeedProfiles"})
}