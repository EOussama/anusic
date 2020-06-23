import { MediaFormat } from '../enums/media-format.enum';

/**
 * The theme
 */
export interface Theme {

  /**
   * The name of the theme
   */
  name: string;

  /**
   * The link to the theme
   */
  link: string;

  /**
   * The episode(s) the theme is used in
   */
  episodes: string[];

  /**
   * The media format
   */
  format: MediaFormat;

  /**
   * Whether the theme contains spoilers
   */
  spoiler: boolean;

  /**
   * Whether the theme is NSFW
   */
  nsfw: boolean;

  /**
   * Whether the theme has lyrics
   */
  lyrics: boolean;

  /**
   * Whether the video is 1080p
   */
  HD: boolean;
}
