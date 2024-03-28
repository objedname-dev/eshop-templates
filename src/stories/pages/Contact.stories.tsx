import { createSignal } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { BackButton } from '@/components/BackButton';
import { BottomPanel } from '@/components/BottomPanel';
import { Footer } from '@/components/Footer';
import { MapInfoBox } from '@/components/MapInfoBox';
import { MapLegend } from '@/components/MapLegend';
import { TopPanel } from '@/components/TopPanel';
import MapsBg from '@/stories/assets/maps-bg.png';

import { defaultProps as defaultFooterProps } from '../Footer.stories';

const meta = {
  title: 'Pages/Contact',
  render: (props) => {
    const [showMapInfoBox, setShowMapInfoBox] = createSignal(true);

    return (
      <div class="body-container">
        <div class="fullpage">
          <TopPanel
            logoUrl="https://objedname.eu/user-data/factories/80/imgs/logo/logo_hor_white.png"
            isMiniMenu
          />
          <BottomPanel cartItemsCount={0} pointsCount={100} showPoints={false} />
          <div class="section">
            <div class="slide" id="contact" style={{ display: 'block' }}>
              <div class="map-container">
                <BackButton
                  onClick={() => setShowMapInfoBox(false)}
                  style={{ display: showMapInfoBox() ? '' : 'none' }}
                >
                  Zobrazit na mapě
                </BackButton>
                <div class="map-content">
                  <div
                    id="map-map"
                    class="smap smap-defaults focus"
                    style={{ width: '100%', height: '100%', 'background-image': `url('${MapsBg}')` }}
                  >
                    <div class="hud">
                      <div>
                        <div style={{ position: 'absolute', left: '0%', top: '50%' }}>
                          <BackButton
                            onClick={() => setShowMapInfoBox(true)}
                            style={{ display: showMapInfoBox() ? 'none' : '' }}
                          >
                            Zobrazit kontakt
                          </BackButton>
                        </div>
                        <div style={{ position: 'absolute', left: '2%', bottom: '5%' }}>
                          <MapLegend areas={props.areas} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MapInfoBox
                  address={props.address}
                  businessHours={props.businessHours}
                  imageUrl={props.imageUrl}
                  name={props.name}
                  openingHours={props.openingHours}
                  phone={props.phone}
                  show={showMapInfoBox()}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer {...defaultFooterProps} />
      </div>
    );
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    address: 'Hlavní 11,\nOstrava 12300',
    imageUrl: 'https://objedname.eu/user-data/factories/80/imgs/map_photo.jpg',
    name: 'Demo Restaurace Objednáme.cz',
    phone: '+420 771 145 451',
    businessHours: [
      {
        title: 'Pondělí - Pátek',
        timeFrom: '11:00',
        timeTo: '21:00',
      },
      {
        title: 'Sobota',
        timeFrom: '11:00',
        timeTo: '00:00',
      },
      {
        title: 'Neděle',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
    ],
    openingHours: [
      {
        title: 'Pondělí',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
      {
        title: 'Úterý',
        timeFrom: '00:00',
        timeTo: '10:59',
      },
      {
        title: 'Středa - Čtvrtek',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
      {
        title: 'Pátek',
        timeFrom: '00:00',
        timeTo: '20:59',
      },
      {
        title: 'Sobota - Neděle',
        timeFrom: '00:00',
        timeTo: '23:59',
      },
    ],
    areas: [
      {
        color: '#ff0000',
        label: '29 Kč, min. obj. 100 Kč, Zdarma od 300Kč',
        type: 'fixed',
      },
      {
        color: '#4b00fa',
        label: '59 Kč, min. obj. 200 Kč, Zdarma od 500Kč',
        type: 'fixed',
      },
      { color: '#000000', label: 'Oblast nerozvážíme', type: 'free' },
    ],
  },
};
