import {CanActivateFn} from '@angular/router';
import {StorageService} from '../../services/storage/storage.service';
import {inject} from '@angular/core';
import {StorageKey} from '../../models/enums/internal/StorageKey';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const storageService = inject(StorageService);

  const hasToken = !!storageService.get(StorageKey.TOKEN);

  console.log(
    `User ${hasToken ? 'has' : 'does NOT have'} permission to navigate to /authenticated`,
  );

  // If user has a token, allow him/her access
  return hasToken;
};
